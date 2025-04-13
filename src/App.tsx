import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import InvoiceListPage from "./pages/InvoiceListPage";
import CreateInvoicePage from "./pages/CreateInvoicePage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
     return (
          <AuthProvider>
               <Router>
                    <Routes>
                         <Route path="/" element={<HomePage />} />
                         <Route path="/login" element={<LoginPage />} />
                         <Route path="/register" element={<RegisterPage />} />
                         <Route
                              path="/invoice-list"
                              element={
                                   <ProtectedRoute>
                                        <InvoiceListPage />
                                   </ProtectedRoute>
                              }
                         />
                         <Route
                              path="/create-invoice"
                              element={
                                   <ProtectedRoute>
                                        <CreateInvoicePage />
                                   </ProtectedRoute>
                              }
                         />
                    </Routes>
               </Router>
          </AuthProvider>
     );
}

export default App;
