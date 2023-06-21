// Account Page & Cart Page INT
export interface StateInterface {
  cart: [
    {
      id: number;
      country: string;
      name: string;
      stock: number;
      price: number;
      toAdd: number;
    }
  ];
  category: [
    {
      id: number;
      country: string;
      name: string;
      stock: number;
      price: number;
      toAdd: number;
    }
  ];
}
export interface CartAddInterface {
  id: number;
  country: string;
  name: string;
  price: number;
  toAdd: number;
  stock: number;
}
export interface CartLogicCounterInterface {
  id: number;
  v: number;
  stock: number;
}

// Counter INT
export interface CounterProps {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}

// Modal INT
export interface ModalProps {
  onClose: () => void;
}
