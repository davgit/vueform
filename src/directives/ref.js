import Vue from 'vue'
import _ from 'lodash'

function add (el, binding, vnode) {
  const ref = binding.arg
  const vm = vnode.context
  const thing = vnode.componentInstance || vnode.elm

  if (!vm.$refs.hasOwnProperty(ref)) {
    vm.$refs = Vue.observable(Object.assign({}, vm.$refs, {
      [ref]: thing
    }))
  }
}

function remove (el, {arg: ref }, {context: vm }, vnode) {
  if (vm.$refs.hasOwnProperty(ref)) {
    delete vm.$refs[ref]
  }
}

export default {
  bind: add,
  update: add,
  unbind: remove
}