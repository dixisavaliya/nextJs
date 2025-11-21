'use client';

import React, { useState, useEffect } from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import DatePicker from 'react-datepicker';
import { getData, postData, putData, deleteRequest } from '@/utils/api';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/AuthContext';

export default function EventPage() {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        start: null,
        end: null,
        location: '',
        instructor: '' // presenter
    });

    // Check if user has edit access (admin only)
    // const hasEventEditAccess = user && (user.role === 'admin' || user.role === 'super_admin' || user.isAdmin);
    const hasEventEditAccess = 'admin';

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const response = await getData('events', true);

            // Map API response to FullCalendar format
            const formattedEvents = (response.data || response).map(event => ({
                id: event.id.toString(),
                title: event.event_title,
                start: event.start_date_time,
                end: event.end_date_time,
                extendedProps: {
                    description: event.description,
                    location: event.location,
                    presenter: event.presenter
                },
                backgroundColor: '#007bff',
                borderColor: '#0056b3',
                textColor: '#ffffff'
            }));

            setEvents(formattedEvents);
        } catch (error) {
            console.error('Error fetching events:', error);
            toast.error('Failed to load events. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleEventClick = (clickInfo) => {
        const event = clickInfo.event;
        setEditingEvent(event);

        // Populate form with event data
        setEventData({
            title: event.title || '',
            description: event.extendedProps.description || '',
            start: event.start ? new Date(event.start) : null,
            end: event.end ? new Date(event.end) : null,
            location: event.extendedProps.location || '',
            instructor: event.extendedProps.presenter || ''
        });

        setShowModal(true);
    };

    const handleAddEvent = () => {
        setEditingEvent(null);
        setEventData({
            title: '',
            description: '',
            start: null,
            end: null,
            location: '',
            instructor: ''
        });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingEvent(null);
        setEventData({
            title: '',
            description: '',
            start: null,
            end: null,
            location: '',
            instructor: ''
        });
    };

    const handleSaveEvent = async () => {
        try {
            if (!eventData.title || !eventData.start) {
                toast.error('Please fill in required fields (Title and Start Date)');
                return;
            }

            const payload = {
                event_title: eventData.title,
                description: eventData.description,
                start_date_time: eventData.start.toISOString(),
                end_date_time: eventData.end ? eventData.end.toISOString() : null,
                location: eventData.location,
                presenter: eventData.instructor
            };

            if (editingEvent) {
                // Update existing event
                await putData(`events/${editingEvent.id}`, payload);
                toast.success('Event updated successfully!');
            } else {
                // Create new event
                await postData('events', payload);
                toast.success('Event created successfully!');
            }

            handleCloseModal();
            fetchEvents(); // Refresh events list
        } catch (error) {
            console.error('Error saving event:', error);
            toast.error(editingEvent ? 'Failed to update event' : 'Failed to create event');
        }
    };

    const handleDeleteEvent = async () => {
        if (!editingEvent) return;

        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                await deleteRequest(`events/${editingEvent.id}`);
                toast.success('Event deleted successfully!');
                handleCloseModal();
                fetchEvents(); // Refresh events list
            } catch (error) {
                console.error('Error deleting event:', error);
                toast.error('Failed to delete event');
            }
        }
    };

    return (
        <>
            <section className="section-events py-lg-25 py-15">
                <Container fluid>
                    <div className="mb-10 d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <div>
                            <h1 className="text-primary mb-7 mb-lg-12">Events Calendar</h1>
                            <p className="fw-medium">View all upcoming events and workshops.</p>
                        </div>
                        {hasEventEditAccess && (
                            <Button variant="primary" onClick={handleAddEvent}>
                                <i className="fas fa-plus me-2"></i>
                                Add Event
                            </Button>
                        )}
                    </div>

                    {loading ? (
                        <div className="text-center py-10">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="calendar-container">
                            <FullCalendar
                                plugins={[dayGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                                headerToolbar={{
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'dayGridMonth'
                                }}
                                events={events}
                                eventClick={handleEventClick}
                                height="auto"
                                editable={false}
                                selectable={false}
                                dayMaxEvents={true}
                                moreLinkClick="popover"
                                eventDisplay="block"
                                locale="en"
                            />
                        </div>
                    )}
                </Container>
            </section>

            {/* Event Modal */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editingEvent
                            ? hasEventEditAccess
                                ? "Edit Event"
                                : "Event Details"
                            : "Add Event"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={eventData.title}
                                onChange={(e) =>
                                    setEventData({ ...eventData, title: e.target.value })
                                }
                                disabled={!hasEventEditAccess}
                                placeholder="Enter event title"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={eventData.description}
                                onChange={(e) =>
                                    setEventData({
                                        ...eventData,
                                        description: e.target.value,
                                    })
                                }
                                disabled={!hasEventEditAccess}
                                placeholder="Enter event description"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Start Date & Time</Form.Label>
                            <DatePicker
                                selected={eventData.start}
                                onChange={(date) =>
                                    setEventData({ ...eventData, start: date })
                                }
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="MM/dd/yyyy h:mm aa"
                                className="form-control"
                                // wrapperClassName="w-100"
                                disabled={!hasEventEditAccess}
                                placeholderText="Select start date and time"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>End Date & Time</Form.Label>
                            <DatePicker
                                selected={eventData.end}
                                onChange={(date) =>
                                    setEventData({ ...eventData, end: date })
                                }
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="MM/dd/yyyy h:mm aa"
                                className="form-control"
                                // wrapperClassName="w-100"
                                disabled={!hasEventEditAccess}
                                placeholderText="Select end date and time"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                value={eventData.location}
                                onChange={(e) =>
                                    setEventData({
                                        ...eventData,
                                        location: e.target.value,
                                    })
                                }
                                disabled={!hasEventEditAccess}
                                placeholder="Enter event location"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Presenter</Form.Label>
                            <Form.Control
                                type="text"
                                value={eventData.instructor}
                                onChange={(e) =>
                                    setEventData({ ...eventData, instructor: e.target.value })
                                }
                                disabled={!hasEventEditAccess}
                                placeholder="Enter presenter name"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {hasEventEditAccess ? (
                        <>
                            <Button
                                variant="secondary"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </Button>
                            {editingEvent && (
                                <Button variant="danger" onClick={handleDeleteEvent}>
                                    Delete
                                </Button>
                            )}
                            <Button variant="primary" onClick={handleSaveEvent}>
                                Save
                            </Button>
                        </>
                    ) : (
                        <Button
                            variant="secondary"
                            onClick={handleCloseModal}
                        >
                            Close
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
}
