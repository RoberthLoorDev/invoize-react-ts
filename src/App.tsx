import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import InvoiceListPage from "./pages/InvoiceListPage";
import CreateInvoicePage from "./pages/CreateInvoicePage";

function App() {
     return (
          <Router>
               <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/invoice-list" element={<InvoiceListPage />} />
                    <Route path="/create-invoice" element={<CreateInvoicePage />} />
               </Routes>
          </Router>
     );
}

export default App;
