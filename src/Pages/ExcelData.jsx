import { useState, useEffect, useRef } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

export default function ExcelData() {
  const [fileObject, setFileObject] = useState("");
  const [data, setData] = useState([]);
  // const hiddenFileInput = useRef(null);
  useEffect(() => {
    if (fileObject) {
      ExcelRenderer(fileObject, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          const modifyData = resp.rows?.slice(1)?.map((itm, index) => ({
            Sr: itm[0] || "",
            Student: itm[1] || "",
            Class: itm[2] || ""
          }));
          setData(modifyData);
          // resp?.rows?.map()
          // console.log(resp);
        }
      });
    }
  }, [fileObject]);


  useEffect(()=>{
    console.log(JSON.stringify(data))
  },[data])

  return (
    <div className="App">
      <h1>Adding Excel file and convert Array</h1>

      <input
        type="file"
        onChange={(e) => {
          setFileObject(e.target.files[0]);
        }}
        // ref={hiddenFileInput}
        // style={{ display: "none" }}
        // accept='.csv, .ods, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
      />
      <table
        className="table"
        // cellspacing='0'
        // width='100%'
      >
        {/* {data[0]?.map((item) => ( */}
        <thead>
          <tr>
            {/* {data[0]?.map((head) => (
              <th>{head}</th>
            ))} */}
            <th>Sr No</th>
            <th>Student Name</th>
            <th>Class</th>
          </tr>
        </thead>
        {/* ))} */}
        {data?.map((item) => (
          <tbody>
            <tr>
              <td>{item?.Sr}</td>
              <td>{item?.Student}</td>
              <td>{item?.Class}</td>
            </tr>
          </tbody>
        ))}
        {/* <p>{JSON.stringify(data)}</p>
        <h1></h1> */}
      </table>
    </div>
  );
}
