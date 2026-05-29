import { useState } from "react";

function MeetingForm({ onAdd }) {

  const [name, setName] =
    useState("");

  const [role, setRole] =
    useState("");

  const [cost, setCost] =
    useState("");

  const handleSubmit = () => {

    if (
      !name ||
      !role ||
      !cost
    ) {
      return;
    }

    onAdd({
      name,
      role,
      costPerHour:
        Number(cost)
    });

    setName("");
    setRole("");
    setCost("");
  };

  return (

    <div
      style={{
        background:"#0f172a",
        padding:"25px",
        borderRadius:"20px",
        border:"1px solid #1e293b"
      }}
    >

      <h2>
        Add Participant
      </h2>

      <br/>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>
          setName(
            e.target.value
          )
        }
        className="glass-input"
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e)=>
          setRole(
            e.target.value
          )
        }
        className="glass-input"
      />

      <input
        type="number"
        placeholder="Cost Per Hour"
        value={cost}
        onChange={(e)=>
          setCost(
            e.target.value
          )
        }
        className="glass-input"
      />

      <button
        className="glass-btn"
        onClick={handleSubmit}
      >
        Add Participant
      </button>

    </div>

  );

}

export default MeetingForm;