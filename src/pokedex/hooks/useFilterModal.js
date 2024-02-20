
import { useDispatch, useSelector } from "react-redux";
import { updateStatePokeType } from "../../store";
import { useEffect, useState } from "react";


export const useFilterModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const { poketypes } = useSelector((state) => state.poke);
  const [poketypeslist, setpoketypeslist] = useState(poketypes.slice());
  const dispatch = useDispatch();
  useEffect(() => {
    setpoketypeslist(poketypes.slice());
  }, [show]);

  const onChangePokeType = (poketype, event) => {
    let arreglo = poketypeslist.filter((item) => item.selected);
    if (arreglo.length < 2 || (arreglo.length >= 2 && !event.target.checked)) {
      let pokeTypeValue = {
        name: poketype.name,
        color: poketype.color,
        selected: event.target.checked,
      };
      let newpoketypeslist = poketypeslist.map((pokeType) => {
        if (pokeType.name === poketype.name) {
          return pokeTypeValue;
        }
        return pokeType;
      });
      setpoketypeslist(newpoketypeslist);
    }
  };

  const onSaveChangesTypes = ()=>{
    dispatch(updateStatePokeType(poketypeslist));
    handleClose();
    }

    return {
        poketypeslist,
        show,
        handleShow,
        handleClose,
        onChangePokeType,
        onSaveChangesTypes,
      };


};
