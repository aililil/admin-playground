import { log } from "console";
import { reactive } from "vue";

type RefNode = Element | ProxyConstructor;
/**
 * @desc feature like $refs in vue2
 */
export function useRefs<T extends Record<string, RefNode>>(obj: T) {
  const refs = reactive({} as T);

  const setRefs = (name: string) => {
    return (el: RefNode) => {
      if (el) obj[name] = el;
    };
  };
  return [refs, setRefs];
}

function test<T extends Record<string, number>>(obj: T, key: string) {
  console.log((obj[key] = 123));
}
