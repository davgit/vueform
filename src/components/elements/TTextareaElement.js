import { onMounted } from 'composition-api'
import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import useAddons from './../../composables/elements/useAddons'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useHandleInput from './../../composables/elements/useHandleInput'
import useLanguages from './../../composables/elements/useLanguages'
import useFloating from './../../composables/elements/useFloating'
import useClasses from './../../composables/elements/useClasses'

import { multilingual as useValue } from './../../composables/elements/useValue'
import { multilingual as useData } from './../../composables/elements/useData'
import { multilingual as useDefault } from './../../composables/elements/useDefault'
import { multilingual as useNullValue } from './../../composables/elements/useNullValue'
import { multilingual as useValidation } from './../../composables/elements/useValidation'
import { multilingual as useEmpty } from './../../composables/elements/useEmpty'
import { multilingual as useAutogrow } from './../../composables/elements/useAutogrow'
import { multilingual as useWatchValue } from './../../composables/elements/useWatchValue'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'TTextareaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-textarea',
      private: true,
    },
    default: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    autogrow: {
      required: false,
      type: [Boolean],
      default: true
    },
    rows: {
      required: false,
      type: [Number],
      default: 3
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
  },
  setup(props, context) {
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      useInput,
      usePath,
      useDisabled,
      useFieldId,
      useFloating,
      useEvents,
      useBaseElement,
      useAddons,
      useLanguages,
      useNullValue,
      useDefault,
      useValue,
      useConditions,
      useValidation,
      useData,
      useEmpty,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useHandleInput,
      useAutogrow,
    ]
    context.slots = [
      'label', 'info', 'description', 'before',
      'between', 'after', 'addon-before', 'addon-after',
    ]
    context.watchValue = false
    context.initValidation = false

    const element = useElement(props, context)

    useWatchValue(props, context, element)

    onMounted(() => {
      element.initState()
      element.initMessageBag()
      element.initValidation()
    })

    return {
      ...element,
    }
  },
}