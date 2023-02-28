import { ReactNode } from "react";
import Addproduct from "./Addproduct";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  addUser?: (value:any) =>void
  editProduct?: any
  editPutProduct?:any
  btnEdit?:boolean
}


export default function Modal(props: ModalType) {

  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" >
          <div  className=" modal-box">
            <Addproduct 
              toggle={props.toggle} 
              addUser={props.addUser} 
              editProduct={props.editProduct} 
              editPutProduct={props.editPutProduct}
              btnEdit={props.btnEdit}
              />
          </div>
        </div>
      )}
    </>
  );
}