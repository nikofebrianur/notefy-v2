import React from "react";
import PropTypes from "prop-types";
import PageAction from "../layout/PageAction";

function IdNotes({ archived, handleEdit, handleArchive, handleDelete }) {
  return (
    <PageAction page="detail-page">
      <>
        <button
          className="action"
          type="button"
          title="Edit"
          onClick={() => handleEdit()}
        >
			edit
		</button>
        <button
          className="action"
          type="button"
          title={archived ? "Activate" : "Archive"}
          onClick={() => handleArchive()}
        >
          {archived ? "archiveout" : "archivein"}
        </button>
        <button
          className="action"
          type="button"
          title="Hapus"
          onClick={() => handleDelete()}
        >
			tombol delete
		</button>
      </>
    </PageAction>
  );
};

IdNotes.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default IdNotes;