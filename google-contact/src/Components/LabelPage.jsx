import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { fullName } from "../utils/contactUtils";
import Avatar from "../Components/Avatar";

export default function LabelPage({ contacts }) {
  const { name } = useParams();

  // ✅ filter contacts by label
  const filtered = useMemo(() => {
    return contacts.filter(
      c => c.label.toLowerCase() === name.toLowerCase()
    );
  }, [contacts, name]);

  // ✅ group by alphabet (same as ContactList)
  const grouped = useMemo(() => {
    const g = {};
    [...filtered]
      .sort((a, b) => fullName(a).localeCompare(fullName(b)))
      .forEach(c => {
        const letter = c.last[0].toUpperCase();
        (g[letter] = g[letter] || []).push(c);
      });
    return g;
  }, [filtered]);

  // empty state
  if (!filtered.length) {
    return (
      <div className="empty-state">
        <h3>No contacts in "{name}"</h3>
      </div>
    );
  }

  return (
    <div className="page-contacts">
      {/* ✅ Toolbar */}
      <div className="contacts-toolbar">
        <h1>{name} Contacts</h1>
        <span>{filtered.length} contacts</span>
      </div>

      {/* ✅ Grouped List */}
      {Object.keys(grouped).sort().map(letter => (
        <div key={letter}>
          {/* Alphabet Header */}
          <div className="alpha-header">{letter}</div>

          {/* Contacts */}
          {grouped[letter].map(c => (
            <Link
              to={`/contact/${c.id}`}
              key={c.id}
              className="contact-row"
            >
              <Avatar contact={c} />

              <div className="info">
                <div className="name">{fullName(c)}</div>
                <div className="sub">{c.email}</div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
} 