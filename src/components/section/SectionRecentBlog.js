'use client';

import React from "react";
import { Container, Row, Nav, Tab } from "react-bootstrap";
import { ItemBlog } from "../utilities";

const BlogSection = ({ category, blogs, allBlog }) => {
    // const categoriesWithAll = allBlog
    //     ? [{ id: "all", title: "All" }, ...category]
    //     : category;
    const categoriesWithAll = allBlog
        ? [{ id: "all", title: "All" }, ...category]
        : category;

    // defaultActiveKey = allBlog ? 'all' : first category id
    const defaultActiveKey = allBlog
        ? "all"
        : category?.[0]?.id || "";
    console.log(category, "category");
    console.log(blogs, 'blogs');

    return (
        <section className="bg-white py-lg-10 py-10">
            <Container fluid>
                <div className="title text-center">
                    <h2>Recent Blogs</h2>
                </div>

                <Tab.Container defaultActiveKey={defaultActiveKey}>
                    <Nav variant="tabs" className="nav-tabs" id="myTab">
                        {categoriesWithAll.map((item) => (
                            <Nav.Item key={item.id}>
                                <Nav.Link eventKey={item.id}>{item.title}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>

                    <Tab.Content id="myTabContent">
                        {categoriesWithAll.map((cat) => (
                            <Tab.Pane key={cat.id} eventKey={cat.id}>
                                <Row className="g-8">
                                    {(cat.id === "all"
                                        ? blogs
                                        : blogs.filter((blog) => blog.category_id === cat.id)
                                    ).map((blog, index) => (
                                        <ItemBlog key={index} blogData={blog} />
                                    ))}

                                    {(cat.id === "all" ? blogs.length === 0 : blogs.filter((b) => b.category_id === cat.id).length === 0) && (
                                        <p className="text-center mt-3">No blogs found for this category.</p>
                                    )}
                                </Row>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Tab.Container>
            </Container>
        </section>
    );
};

export default BlogSection;
