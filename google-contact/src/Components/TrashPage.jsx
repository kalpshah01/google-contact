import { Link } from "react-router-dom";
import { fullName } from "../utils/contactUtils";
import Avatar from "../Components/Avatar";

export default function TrashPage({ trash }) {
  if (!trash.length) {
    return (
      <div className="empty-state">
        <i className="bi bi-trash"></i>
        <h3>Trash is empty</h3>
      </div>
    );
  }

  return (
    <div className="page-contacts">
      {/* Toolbar */}
      <div className="contacts-toolbar">
        <h1>Trash</h1>
        <span>{trash.length} contacts</span>
      </div>

      {/* List */}
      {trash.map(c => (
        <div key={c.id} className="contact-row">
          <Avatar contact={c} />

          <div className="info">
            <div className="name">{fullName(c)}</div>
            <div className="sub">{c.email}</div>
          </div>

          {/* Restore Button */}
          <div className="row-actions">
            <button className="icon-btn" title="Restore">
              <i className="bi bi-arrow-counterclockwise"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}