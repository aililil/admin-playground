import { log } from "console";
import { reactive } from "vue";

type RefNode = Element;
/**
 * @desc feature like $refs in vue2
 */
export function useRefs<T extends Record<string, RefNode>>() {
  const refs = reactive({});

  const setRefs = (name: keyof T) => {
    return (el: RefNode) => {
      if (el) (refs as T)[name] = el;
    };
  };

  return [refs, setRefs];
}

const data = reactive({ 1: 123 });

function test<T extends Record<string, number>>(obj: T, key: keyof T) {
  obj[key] = 123;
  console.log(obj[key]);
}
