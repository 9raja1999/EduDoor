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
          Sr: 1,
          Student: "Ayesha Asad",
          Class: "II"
        },
        {
          Sr: 2,
          Student: "Marium",
          Class: "II"
        },
        {
          Sr: 3,
          Student: "Zanaib ghulam",
          Class: "II"
        },
        {
          Sr: 4,
          Student: "Asheeta",
          Class: "II"
        },
        {
          Sr: 5,
          Student: "Diya aneel",
          Class: "II"
        },
        {
          Sr: 6,
          Student: "Dua Faheem",
          Class: "II"
        },
        {
          Sr: 7,
          Student: "Sania Saleem",
          Class: "II"
        },
        {
          Sr: 8,
          Student: "Esha Taveez",
          Class: "II"
        },
        {
          Sr: 9,
          Student: "Emman Fayyaz",
          Class: "II"
        },
        {
          Sr: 10,
          Student: "Sher Bano",
          Class: "II"
        },
        {
          Sr: 11,
          Student: "Sumera Tanveer",
          Class: "II"
        },
        {
          Sr: 12,
          Student: "Zeenat Rayaz",
          Class: "II"
        },
        {
          Sr: 13,
          Student: "Dua Shahid",
          Class: "II"
        },
        {
          Sr: 14,
          Student: "Bisma Imran",
          Class: "II"
        },
        {
          Sr: 15,
          Student: "Warsha ",
          Class: "II"
        },
        {
          Sr: 16,
          Student: "Bisma Waseem",
          Class: "II"
        },
        {
          Sr: 17,
          Student: "Zaviya ismail",
          Class: "II"
        },
        {
          Sr: 18,
          Student: "Marva Naaz",
          Class: "II"
        },
        {
          Sr: 19,
          Student: "Hibba Haider",
          Class: "II"
        },
        {
          Sr: 20,
          Student: "Liba",
          Class: "II"
        },
        {
          Sr: 21,
          Student: "Zil-e-Huma",
          Class: "II"
        },
        {
          Sr: 22,
          Student: "Liba Ajmal",
          Class: "III"
        },
        {
          Sr: 23,
          Student: "Nighat",
          Class: "III"
        },
        {
          Sr: 24,
          Student: "Faiza",
          Class: "III"
        },
        {
          Sr: 25,
          Student: "Safiya",
          Class: "IV"
        },
        {
          Sr: 26,
          Student: "Shumaila",
          Class: "IV"
        },
        {
          Sr: 27,
          Student: "Shaista",
          Class: "IV"
        },
        {
          Sr: 28,
          Student: "Mumta",
          Class: "IV"
        },
        {
          Sr: 29,
          Student: "Noor Fatima",
          Class: "IV"
        },
        {
          Sr: 30,
          Student: "Alishba",
          Class: "IV"
        },
        {
          Sr: 31,
          Student: "Shewani",
          Class: "IV"
        },
        {
          Sr: 32,
          Student: "Musarat",
          Class: "IV"
        },
        {
          Sr: 33,
          Student: "Laiba Ikram",
          Class: "IV"
        },
        {
          Sr: 34,
          Student: "Zainab Riasat",
          Class: "IV"
        },
        {
          Sr: 35,
          Student: "Sabiya Raheem",
          Class: "IV"
        },
        {
          Sr: 36,
          Student: "Mariya Saleem",
          Class: "IV"
        },
        {
          Sr: 37,
          Student: "Ayesha Saleem",
          Class: "IV"
        },
        {
          Sr: 38,
          Student: "Bainzeer",
          Class: "V"
        },
        {
          Sr: 39,
          Student: "Ayesha Azam",
          Class: "V"
        },
        {
          Sr: 40,
          Student: "Saima Muslim",
          Class: "V"
        },
        {
          Sr: 41,
          Student: "Janafer Saleem",
          Class: "V"
        },
        {
          Sr: 42,
          Student: "Jaiseka Saleem",
          Class: "V"
        },
        {
          Sr: 43,
          Student: "Kulsoom",
          Class: "V"
        },
        {
          Sr: 44,
          Student: "Neha mubeen",
          Class: "VI"
        },
        {
          Sr: 45,
          Student: "Faiza Waqar",
          Class: "VI"
        },
        {
          Sr: 46,
          Student: "Areeba ishtaiq",
          Class: "VI"
        },
        {
          Sr: 47,
          Student: "Khadija hameed",
          Class: "VI"
        },
        {
          Sr: 48,
          Student: "Ulfat Shokat",
          Class: "VI"
        },
        {
          Sr: 49,
          Student: "Kauser Haneef",
          Class: "VII"
        },
        {
          Sr: 50,
          Student: "Naila issa",
          Class: "VII"
        },
        {
          Sr: 51,
          Student: "Hifsa Ghulam",
          Class: "VII"
        },
        {
          Sr: 52,
          Student: "Shahida Farooq",
          Class: "VII"
        },
        {
          Sr: 53,
          Student: "Muskan Irfan",
          Class: "VII"
        },
        {
          Sr: 54,
          Student: "Fatima Nameem",
          Class: "VII"
        },
        {
          Sr: 55,
          Student: "Mariyam Rafeeq",
          Class: "VII"
        },
        {
          Sr: 56,
          Student: "Farheen Yasir",
          Class: "VII"
        },
        {
          Sr: 57,
          Student: "Malika Ghulam",
          Class: "VII"
        },
        {
          Sr: 58,
          Student: "Sonia Zahid",
          Class: "VII"
        },
        {
          Sr: 59,
          Student: "Iram Irfan",
          Class: "VII"
        },
        {
          Sr: 60,
          Student: "Amber Saleel",
          Class: "VII"
        },
        {
          Sr: 61,
          Student: "Zakia Hameed",
          Class: "VII"
        },
        {
          Sr: 62,
          Student: "Fareeza Yasir",
          Class: "VII"
        },
        {
          Sr: 63,
          Student: "Esha Asghar",
          Class: "VII"
        },
        {
          Sr: 64,
          Student: "Bisma",
          Class: "VII"
        },
        {
          Sr: 65,
          Student: "kiran Basheer",
          Class: "VII"
        },
        {
          Sr: 66,
          Student: "Alisha Ibrahim",
          Class: "VII"
        },
        {
          Sr: 67,
          Student: "Javeria Taj",
          Class: "VII"
        },
        {
          Sr: 68,
          Student: "Sana Nawaz",
          Class: "VII"
        },
        {
          Sr: 69,
          Student: "Zanaib Saleem",
          Class: "VII"
        },
        {
          Sr: 70,
          Student: "Nabeela Noor",
          Class: "VII"
        },
        {
          Sr: 71,
          Student: "Iqra Raza",
          Class: "VII"
        },
        {
          Sr: 72,
          Student: "Ambreen Moosa",
          Class: "VII"
        },
        {
          Sr: 73,
          Student: "Farheen Moosa",
          Class: "VII"
        },
        {
          Sr: 74,
          Student: "Ghulam Zanaib",
          Class: "VII"
        },
        {
          Sr: 75,
          Student: "Zoha Jameel",
          Class: "VII"
        },
        {
          Sr: 76,
          Student: "Areeba Kareem",
          Class: "VII"
        },
        {
          Sr: 77,
          Student: "Tooba Tariq",
          Class: "VII"
        },
        {
          Sr: 78,
          Student: "Mariya Fayyaz",
          Class: "VII"
        },
        {
          Sr: 79,
          Student: "Asma Razi",
          Class: "VII"
        },
        {
          Sr: 80,
          Student: "Vidiya kumari",
          Class: "VII"
        },
        {
          Sr: 81,
          Student: "Horain Iqbal",
          Class: "VII"
        },
        {
          Sr: 82,
          Student: "Sadaf",
          Class: "VII"
        },
        {
          Sr: 83,
          Student: "Rimsha Muhammad",
          Class: "VII"
        },
        {
          Sr: 84,
          Student: "Sitara Rasheed",
          Class: "VII"
        },
        {
          Sr: 85,
          Student: "Samar Afzal",
          Class: "VII"
        },
        {
          Sr: 86,
          Student: "Sira Afzal",
          Class: "VII"
        },
        {
          Sr: 87,
          Student: "Malika Taswar",
          Class: "VII"
        },
        {
          Sr: 88,
          Student: "Muskan Hafeez",
          Class: "VII"
        },
        {
          Sr: 89,
          Student: "Manhoor Jamshed",
          Class: "VII"
        },
        {
          Sr: 90,
          Student: "Aila Imran",
          Class: "VII"
        },
        {
          Sr: 91,
          Student: "Ifaff Ali",
          Class: "VII"
        },
        {
          Sr: 92,
          Student: "Bushra jan",
          Class: "VII"
        },
        {
          Sr: 93,
          Student: "Faiza Shahnawaz",
          Class: "VII"
        },
        {
          Sr: 94,
          Student: "Gulzar Lal",
          Class: "VII"
        },
        {
          Sr: 95,
          Student: "Hafsa ibrahim",
          Class: "VII"
        },
        {
          Sr: 96,
          Student: "Horain ",
          Class: "VII"
        },
        {
          Sr: 97,
          Student: "Kinza Malik",
          Class: "VII"
        },
        {
          Sr: 98,
          Student: "Kaenat Tariq",
          Class: "VII"
        },
        {
          Sr: 99,
          Student: "kaenat Khaliq",
          Class: "VII"
        },
        {
          Sr: 100,
          Student: "Laiba Imran",
          Class: "VII"
        },
        {
          Sr: 101,
          Student: "Mehnas Ibrahim",
          Class: "VII"
        },
        {
          Sr: 102,
          Student: "Ribsha Wali",
          Class: "VII"
        },
        {
          Sr: 103,
          Student: "Rija Arif",
          Class: "VII"
        },
        {
          Sr: 104,
          Student: "Saira Farooqui",
          Class: "VII"
        },
        {
          Sr: 105,
          Student: "Sumiya khaliq",
          Class: "VII"
        },
        {
          Sr: 106,
          Student: "Naima Ammanullah",
          Class: "VII"
        },
        {
          Sr: 107,
          Student: "Muskan Raza",
          Class: "VII"
        },
        {
          Sr: 108,
          Student: "Laiba Khuram",
          Class: "VII"
        },
        {
          Sr: 109,
          Student: "Sawera Mehboob",
          Class: "VII"
        },
        {
          Sr: 110,
          Student: "Salma Muslim",
          Class: "IX"
        },
        {
          Sr: 111,
          Student: "Iqra Khalid",
          Class: "IX"
        },
        {
          Sr: 112,
          Student: "Saima Abdulrab",
          Class: "IX"
        },
        {
          Sr: 113,
          Student: "Iman Mustaq",
          Class: "IX"
        },
        {
          Sr: 114,
          Student: "Mashwish Nafees",
          Class: "IX"
        },
        {
          Sr: 115,
          Student: "Misbah Sajjad",
          Class: "IX"
        },
        {
          Sr: 116,
          Student: "Mashwish Ayub",
          Class: "IX"
        },
        {
          Sr: 117,
          Student: "Uzma Hameed",
          Class: "IX"
        },
        {
          Sr: 118,
          Student: "Nida Perwaiz",
          Class: "IX"
        },
        {
          Sr: 119,
          Student: "Iqra Ibrar",
          Class: "IX"
        },
        {
          Sr: 120,
          Student: "Rukhar",
          Class: "IX"
        },
        {
          Sr: 121,
          Student: "Ashwaniya",
          Class: "IX"
        },
        {
          Sr: 122,
          Student: "umaima ",
          Class: "IX"
        },
        {
          Sr: 123,
          Student: "Nisha Farooq",
          Class: "IX"
        },
        {
          Sr: 124,
          Student: "Sadia javed",
          Class: "IX"
        },
        {
          Sr: 125,
          Student: "Aimal",
          Class: "IX"
        },
        {
          Sr: 126,
          Student: "Manahil Jameel",
          Class: "IX"
        },
        {
          Sr: 127,
          Student: "Alisha Iqbql",
          Class: "IX"
        },
        {
          Sr: 128,
          Student: "Mariyam Rehman",
          Class: "IX"
        },
        {
          Sr: 129,
          Student: "Niyalish",
          Class: "IX"
        },
        {
          Sr: 130,
          Student: "Madiha",
          Class: "IX"
        },
        {
          Sr: 131,
          Student: "Suriya",
          Class: "IX"
        },
        {
          Sr: 132,
          Student: "Laiba Akber",
          Class: "IX"
        },
        {
          Sr: 133,
          Student: "Hajra nadir",
          Class: "IX"
        },
        {
          Sr: 134,
          Student: "Faiza Saleem",
          Class: "X"
        },
        {
          Sr: 135,
          Student: "Alisha Shezadi",
          Class: "X"
        },
        {
          Sr: 136,
          Student: "Shiza Attaullah",
          Class: "X"
        },
        {
          Sr: 137,
          Student: "Mahnoor Ashraf",
          Class: "X"
        },
        {
          Sr: 138,
          Student: "Sobia Ghani",
          Class: "X"
        },
        {
          Sr: 139,
          Student: "Maheen",
          Class: "X"
        },
        {
          Sr: 140,
          Student: "Naina",
          Class: "X"
        },
        {
          Sr: 141,
          Student: "Marvi",
          Class: "X"
        },
        {
          Sr: 142,
          Student: "Kinza",
          Class: "X"
        },
        {
          Sr: 143,
          Student: "Malisa Bilal",
          Class: "X"
        },
        {
          Sr: 144,
          Student: "Sabiha",
          Class: "X"
        },
        {
          Sr: 145,
          Student: "Dua-e-Zanaib",
          Class: "X"
        },
        {
          Sr: 146,
          Student: "Misbah",
          Class: "X"
        },
        {
          Sr: 147,
          Student: "Komal",
          Class: "X"
        },
        {
          Sr: 148,
          Student: "Mariyam",
          Class: "X"
        },
        {
          Sr: 149,
          Student: "Uzma",
          Class: "X"
        },
        {
          Sr: 150,
          Student: "Alina",
          Class: "X"
        },
        {
          Sr: 151,
          Student: "Ariba",
          Class: "X"
        },
        {
          Sr: 152,
          Student: "Anum",
          Class: "X"
        },
        {
          Sr: 153,
          Student: "Malika",
          Class: "X"
        },
        {
          Sr: 154,
          Student: "Shumaila mashooq",
          Class: "II"
        },
        {
          Sr: 155,
          Student: "Samreen Malooq",
          Class: "II"
        },
        {
          Sr: 156,
          Student: "Nadia M.Bux",
          Class: "II"
        },
        {
          Sr: 157,
          Student: "Sadia M.Bux",
          Class: "II"
        },
        {
          Sr: 158,
          Student: "Dua Rasheed",
          Class: "II"
        },
        {
          Sr: 159,
          Student: "Shabana haneef",
          Class: "II"
        },
        {
          Sr: 160,
          Student: "Taj Bibi",
          Class: "II"
        },
        {
          Sr: 161,
          Student: "hadia M.Aslam",
          Class: "II"
        },
        {
          Sr: 162,
          Student: "Muskan Mohan",
          Class: "II"
        },
        {
          Sr: 163,
          Student: "Quratulain",
          Class: "II"
        },
        {
          Sr: 164,
          Student: "Saima",
          Class: "II"
        },
        {
          Sr: 165,
          Student: "habiba",
          Class: "II"
        },
        {
          Sr: 166,
          Student: "Afreen Yousuf",
          Class: "VII"
        },
        {
          Sr: 167,
          Student: "asma jan ",
          Class: "VII"
        },
        {
          Sr: 168,
          Student: "Aisha Gulam",
          Class: "VII"
        },
        {
          Sr: 169,
          Student: "Kanwal Dilawer",
          Class: "VII"
        },
        {
          Sr: 170,
          Student: "Komal Sharomal",
          Class: "VII"
        },
        {
          Sr: 171,
          Student: "Khadija Hussain",
          Class: "VII"
        },
        {
          Sr: 172,
          Student: "Mehru Nisa",
          Class: "VII"
        },
        {
          Sr: 173,
          Student: "Rehana Ahsan",
          Class: "VII"
        },
        {
          Sr: 174,
          Student: "Rozina Khan",
          Class: "VII"
        },
        {
          Sr: 175,
          Student: "Robina Hassan",
          Class: "VII"
        },
        {
          Sr: 176,
          Student: "Sana Azizullah",
          Class: "VII"
        },
        {
          Sr: 177,
          Student: "Saira Zaheer",
          Class: "VII"
        },
        {
          Sr: 178,
          Student: "Zainab Abdul Fateh",
          Class: "VII"
        },
        {
          Sr: 179,
          Student: "Alisha Shahid",
          Class: "VIII"
        },
        {
          Sr: 180,
          Student: "Fouzia Ibrahim",
          Class: "VIII"
        },
        {
          Sr: 181,
          Student: "Hooria fatima",
          Class: "VIII"
        },
        {
          Sr: 182,
          Student: "Iqra Aslam",
          Class: "VIII"
        },
        {
          Sr: 183,
          Student: "Javeria Zafar",
          Class: "VIII"
        },
        {
          Sr: 184,
          Student: "Noor Bano",
          Class: "VIII"
        },
        {
          Sr: 185,
          Student: "Rahila Kareem",
          Class: "VIII"
        },
        {
          Sr: 186,
          Student: "Rubab Ashraf",
          Class: "VIII"
        },
        {
          Sr: 187,
          Student: "Yusra Yousaf",
          Class: "VIII"
        },
        {
          Sr: 188,
          Student: "Anessa Hamid",
          Class: "IX"
        },
        {
          Sr: 189,
          Student: "Areesha Shafi",
          Class: "IX"
        },
        {
          Sr: 190,
          Student: "Areesha Hanif",
          Class: "IX"
        },
        {
          Sr: 191,
          Student: "Aliza Ashraf",
          Class: "IX"
        },
        {
          Sr: 192,
          Student: "Bakhtawar Faqeer",
          Class: "IX"
        },
        {
          Sr: 193,
          Student: "Dua Batool",
          Class: "IX"
        },
        {
          Sr: 194,
          Student: "Muskan Ali",
          Class: "IX"
        },
        {
          Sr: 195,
          Student: "Maha Mustaqim",
          Class: "IX"
        },
        {
          Sr: 196,
          Student: "Sohana Sohail",
          Class: "IX"
        },
        {
          Sr: 197,
          Student: "Shumaila Bashir",
          Class: "IX"
        },
        {
          Sr: 198,
          Student: "Sania Buksh",
          Class: "IX"
        },
        {
          Sr: 199,
          Student: "Sakina Asif",
          Class: "IX"
        },
        {
          Sr: 200,
          Student: "Samreen Qadir",
          Class: "IX"
        },
        {
          Sr: 201,
          Student: "Farhana Mustafa",
          Class: "X"
        },
        {
          Sr: 202,
          Student: "Khadija Rafique",
          Class: "X"
        },
        {
          Sr: 203,
          Student: "Sania Rana",
          Class: "X"
        },
        {
          Sr: 204,
          Student: "Aisha Hussain",
          Class: "X"
        },
        {
          Sr: 205,
          Student: "Dua Nazeer",
          Class: "X"
        },
        {
          Sr: 206,
          Student: "Sehrish Qasim",
          Class: "X"
        },
        {
          Sr: 207,
          Student: "Bukhtawar Meer",
          Class: "X"
        },
        {
          Sr: 208,
          Student: "Laiba",
          Class: "X"
        }
      ]

    return items;
};

const products = productsGenerator(21);

const columns = [
    {
        dataField: "Sr",
        text: "S.no",
    },
    {
        dataField: "Student",
        text: "Student",
    },
    {
        dataField: "Class",
        text: "Class",
    }
];

function StudentData() {
    return (
        <Container fluid className='PartnerSchoolContainer mt-5 mb-5'>
            <Row>
                <Col md={6} xs={12} className="Partner_column" style={{ margin: '0 auto' }}>
                    <div className="Partner_heading" style={{ marginTop: '15%', marginBottom: 'auto' }}>
                        <h6>Students who are getting education assistance through parhaiCastle</h6>
                        <hr />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8} xs={12} className="Partner_column" style={{ margin: '0 auto' }}>
                    <BootstrapTable
                        bootstrap4
                        striped
                        hover
                        keyField="id"
                        data={products}
                        columns={columns}
                        pagination={paginationFactory({
                            sizePerPage: 10,
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

export default StudentData