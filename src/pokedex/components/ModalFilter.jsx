import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CheckItem } from "./CheckItem";


export const ModalFilter = ({ poketypeslist,show, handleClose,onChangePokeType,onSaveChangesTypes }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Filtro de tipos <i className="bi bi-filter-square-fill"></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="checkList">
          {poketypeslist.map((poketype, i) => (
            <CheckItem
              key={i}
              poketype={poketype}
              onChangePokeType={onChangePokeType}
            ></CheckItem>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSaveChangesTypes}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
