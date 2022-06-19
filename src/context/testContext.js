import { createContext } from "react";

const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (data) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={data.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {data.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "country", headerName: "Country", width: 100 },
  { field: "city", headerName: "City", width: 100 },
  { field: "phone", headerName: "Phone", width: 100 },
];

export const TestContext = createContext(userColumns);

export const TestContextProvider = ({ children }) => {
  return (
    <TestContext.Provider value={{ userColumns }}>
      {children}
    </TestContext.Provider>
  );
};
