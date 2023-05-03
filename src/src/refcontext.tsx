import {
  createSignal,
  createContext,
  useContext,
  Accessor,
  JSXElement,
} from "solid-js";

type ContextType = { docRef: HTMLDivElement | null; children?: JSXElement[] };
const RefContext = createContext<
  (
    | Accessor<HTMLDivElement | null>
    | { setRef(ref: HTMLDivElement): void; removeRef(): void }
  )[]
>([null, () => {}]);

export function RefProvider(props: ContextType) {
  const [docRef, setDocRef] = createSignal<HTMLDivElement | null>(null),
    refManager = [
      docRef,
      {
        setDocRef(ref: HTMLDivElement) {
          console.log("CHANGING TO: ", ref);
          setDocRef(ref);
        },
      },
    ];

  return (
    <RefContext.Provider value={refManager}>
      {props.children}
    </RefContext.Provider>
  );
}

export const useRef = () => {
  return useContext(RefContext);
};
