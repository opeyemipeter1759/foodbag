import React from "react";
import { Link } from "react-router-dom";

import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

const BreadChb = (props = {}) => {
  const items = props.items.map((item) =>
    item.active ? (
      <BreadcrumbItem active>{item.name}</BreadcrumbItem>
    ) : (
      <BreadcrumbItem>
        <Link to={item.href}>{item.name}</Link>
      </BreadcrumbItem>
    )
  );
  return <Breadcrumb>{items}</Breadcrumb>;
};

export default BreadChb;
