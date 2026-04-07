 import {  Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import TopBar from "./Components/TopBar";
import Sidebar from "./Components/Sidebar";
import ContactList from "./Components/ContactList";
import ContactDetail from "./Components/ContactDetail";
import ContactForm from "./Components/ContactForm";
import PlaceholderPage from "./Components/PlaceholderPage";
import LabelPage from "./Components/LabelPage";
import TrashPage from "./Components/TrashPage";
import FrequentPage from "./Components/FrequentPage";
import './index.css';
 const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [trash, setTrash] = useState([]);
   const SEED = [
      { id:1, first:'Aarav',   last:'Patel',     email:'aarav.patel@gmail.com',   phone:'+91 98765 43210', company:'Infosys',     label:'Home' },
      { id:2, first:'Diya',    last:'Shah',      email:'diya.shah@outlook.com',    phone:'+91 90000 11111', company:'TCS',         label:'Work' },
      { id:3, first:'Rohan',   last:'Mehta',     email:'rohan.mehta@yahoo.com',    phone:'+91 88812 34567', company:'Wipro',       label:'Mobile' },
      { id:4, first:'Priya',   last:'Sharma',    email:'priya.sharma@gmail.com',   phone:'+91 77777 22222', company:'HCL Tech',    label:'Work' },
      { id:5, first:'Kabir',   last:'Singh',     email:'kabir.singh@gmail.com',    phone:'+91 99001 23456', company:'Zomato',      label:'Mobile' },
      { id:6, first:'Ananya',  last:'Gupta',     email:'ananya.g@gmail.com',       phone:'+91 80001 11223', company:'Flipkart',    label:'Home' },
      { id:7, first:'Vivaan',  last:'Joshi',     email:'vivaan.joshi@icloud.com',  phone:'+91 70001 55667', company:'Paytm',       label:'Work' },
      { id:8, first:'Ishaan',  last:'Kumar',     email:'ishaan.k@gmail.com',       phone:'+91 91234 56789', company:'BYJU\'s',     label:'Mobile' },
      { id:9, first:'Saanvi',  last:'Reddy',     email:'saanvi.r@gmail.com',       phone:'+91 82233 44556', company:'Nykaa',       label:'Home' },
      { id:10,first:'Arjun',   last:'Verma',     email:'arjun.v@gmail.com',        phone:'+91 93344 55667', company:'OYO',         label:'Work' },
      { id:11,first:'Meera',   last:'Nair',      email:'meera.nair@gmail.com',     phone:'+91 94455 66778', company:'Swiggy',      label:'Mobile' },
      { id:12,first:'Dev',     last:'Kapoor',    email:'dev.k@outlook.com',        phone:'+91 95566 77889', company:'HDFC Bank',   label:'Work' },
      { id:13,first:'Sneha',   last:'Agarwal',   email:'sneha.a@gmail.com',        phone:'+91 96677 88990', company:'Reliance',    label:'Home' },
      { id:14,first:'Tanvi',   last:'Bhatt',     email:'tanvi.bhatt@gmail.com',    phone:'+91 97788 99001', company:'Sun Pharma',  label:'Mobile' },
      { id:15,first:'Neil',    last:'Malhotra',  email:'neil.m@gmail.com',         phone:'+91 98899 00112', company:'ONGC',        label:'Work' },
    ];
      const [q, setQ] = useState('');
      const [contacts, setContacts] = useState(SEED);

      return (
        <>
          <TopBar q={q} setQ={setQ} />
          <div className="app-layout">
            <Sidebar />
            <main className="main">
              <Routes>
                <Route path="/" element={<ContactList contacts={contacts} q={q} favorites={favorites} setFavorites={setFavorites} />} />
                {/* <Route path="/contact/:id" element={<ContactDetail contacts={contacts} />} /> */}
                {/* <Route path="/contact/:id" element={ <ContactDetail contacts={contacts} favorites={favorites} setFavorites={setFavorites} setContacts={setContacts} /> }/> */}
                <Route path="/contact/:id" element={<ContactDetail contacts={contacts} setContacts={setContacts} favorites={favorites} setFavorites={setFavorites} trash={trash} setTrash={setTrash}/>}/>
                <Route path="/new" element={<ContactForm contacts={contacts} setContacts={setContacts} />} />
                <Route path="/edit/:id" element={<ContactForm contacts={contacts} setContacts={setContacts} edit />} />
                <Route path="/frequent" element={<FrequentPage contacts={contacts} favorites={favorites} setFavorites={setFavorites} />} />
                <Route path="/directory" element={<PlaceholderPage icon="bi-building" title="Directory" desc="Your organization's contacts will appear here." />} />
                {/* <Route path="/label/:name" element={<PlaceholderPage icon="bi-bookmark" title="Labels" desc="Contacts you've labeled will appear here." />} /> */}
                {/* <Route path="/trash" element={<PlaceholderPage icon="bi-trash" title="Trash" desc="Deleted contacts stay here for 30 days." />} /> */}
                {/* <Route path="/merge" element={<PlaceholderPage icon="bi-intersect" title="Merge & fix" desc="Duplicate contacts will appear here." />} /> */}
                <Route path="/trash" element={<TrashPage trash={trash} setTrash={setTrash} setContacts={setContacts} />} />
                <Route path="/import" element={<PlaceholderPage icon="bi-upload" title="Import contacts" desc="Upload a CSV or vCard file." />} />
                <Route path="/export" element={<PlaceholderPage icon="bi-download" title="Export contacts" desc="Download your contacts as a CSV or vCard." />} />
                <Route path="/label/:name" element={<LabelPage contacts={contacts} />}/>
              </Routes>
            </main>
          </div>

          <Link to="/new" className="fab d-flex d-md-none" title="New contact">
            <i className="bi bi-plus-lg"></i>
          </Link>
        </>
      );
    };

  //  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    export default App;