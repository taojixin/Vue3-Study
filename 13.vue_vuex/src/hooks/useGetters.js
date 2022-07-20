import { mapGetters, useStore } from "vuex";
import {computed} from 'vue'

export function useGetters(mapper) {
  // 获取store对象
  const store = useStore()

  // 获取到对应的对象的function：{name: function, age:function,...}
  const storeStateFns = mapGetters(mapper)

  // 对数据进行转换
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({ $store: store });
    storeState[fnKey] = computed(fn)
  })

  return storeState
}