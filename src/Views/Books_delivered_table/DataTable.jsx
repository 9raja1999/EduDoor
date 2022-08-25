import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import './DataTable.css';

export const productsGenerator = quantity => {
    const items = [
        {
            id: 1,
            Class: 'Nursery',
            name: 'Faisal English Writing 1',
            sets: 60
        },
        {
            id: 2,
            Class: 'Nursery',
            name: 'Faisal Khushkhati 1',
            sets: 60
        },
        {
            id: 3,
            Class: 'Nursery',
            name: 'Grace Math Activity Book 1',
            sets: 60
        },
        {
            id: 4,
            Class: 'Nursery',
            name: 'Grace Orchard Reading 1',
            sets: 60
        },
        {
            id: 5,
            Class: 'Nursery',
            name: 'Grace Gulistan Reading 1',
            sets: 60
        },
        {
            id: 6,
            Class: 'Nursery',
            name: 'Faisal Global General Knowledge 1',
            sets: 60
        },
        {
            id: 7,
            Class: 'Nursery',
            name: 'Grace Master Colouring 1',
            sets: 60
        },
        {
            id: 8,
            Class: 'KG-1',
            name: 'Faisal English Writing 2',
            sets: 60
        },
        {
            id: 9,
            Class: 'KG-1',
            name: 'Faisal KhusKhati 2',
            sets: 60
        },
        {
            id: 10,
            Class: 'KG-1',
            name: 'Faisal Global General Knowledge 2',
            sets: 60
        },
        {
            id: 11,
            Class: 'KG-1',
            name: 'Grace Orchard Reading 2',
            sets: 60
        },
        {
            id: 12,
            Class: 'KG-1',
            name: 'Grace Gulistan Reading 2',
            sets: 60
        },
        {
            id: 13,
            Class: 'KG-1',
            name: 'Grace Math Activity 2',
            sets: 60
        },
        {
            id: 14,
            Class: 'KG-1',
            name: 'Grace Master Colouring 2',
            sets: 60
        },
        {
            id: 15,
            Class: 'KG-2',
            name: 'Faisal English Writing 3',
            sets: 30
        },
        {
            id: 16,
            Class: 'KG-2',
            name: 'Faisal Khuskhati 3',
            sets: 30
        },
        {
            id: 17,
            Class: 'KG-2',
            name: 'Faisal Global General Knowledge 3 (English)',
            sets: 30
        },
        {
            id: 18,
            Class: 'KG-2',
            name: 'Grace Orchard Reading 3',
            sets: 30
        },
        {
            id: 19,
            Class: 'KG-2',
            name: 'Grace Gulistan Reading 3',
            sets: 30
        },
        {
            id: 20,
            Class: 'KG-2',
            name: 'Grace Math Activity 3',
            sets: 30
        },
        {
            id: 21,
            Class: 'KG-2',
            name: 'Grace Master Colouring C',
            sets: 30
        },
    ];

    return items;
};

const products = productsGenerator(21);

const columns = [
    {
        dataField: "id",
        text: "S.no",
    },
    {
        dataField: "Class",
        text: "Class",
    },
    {
        dataField: "name",
        text: "Book Name",
    },
    {
        dataField: "sets",
        text: "Total Sets",
        formatter: (cellContent, row) => {
            if (row.sets <= 30)
                return (
                    <h5>
                        <span className="btn showLessQuantity">{row.sets} sets</span>
                    </h5>
                );
            return (
                <h5>
                    <span className="btn showQuantity"> {row.sets} sets</span>
                </h5>
            );
        }
    }
];
function DataTable() {
    return (
        <Container fluid className='PartnerSchoolContainer mt-5 mb-5'>
            <Row>
                <Col md={6} xs={12} className="Partner_column" style={{ margin: '0 auto' }}>
                    <div className="Partner_heading" style={{ marginTop: '15%', marginBottom: 'auto' }}>
                        <h6>Books delivered by ParhaiCastle to Schools</h6>
                        <hr />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} xs={12} className="Partner_column" style={{ margin: '0 auto' }}>
                    <BootstrapTable
                        bootstrap4
                        striped
                        hover
                        keyField="id"
                        data={products}
                        columns={columns}
                        pagination={paginationFactory({
                            sizePerPage: 5,
                            paginationSize: 5,
                            firstPageText: 'First',
                            prePageText: 'Back',
                            nextPageText: 'Next',
                            lastPageText: 'Last',
                            nextPageTitle: 'First page',
                            prePageTitle: 'Pre page',
                            firstPageTitle: 'Next page',
                            lastPageTitle: 'Last page',
                            sizePerPageList: [{
                                text: '5', value: 5
                            }, {
                                text: '10', value: 10
                            }, {
                                text: 'All', value: products.length
                            }],
                        })}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default DataTable