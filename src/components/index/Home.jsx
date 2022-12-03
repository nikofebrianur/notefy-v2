import React from "react";
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import PageAction from "../layout/PageAction";

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageAction page="homepage">
      <button
        className="action"
        type="button"
        title="Add"
        onClick={() => navigate("/notes/new")}
      >
        <FaPlus/>
      </button>
    </PageAction>
  );
}
