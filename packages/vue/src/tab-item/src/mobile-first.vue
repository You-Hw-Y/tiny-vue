<script lang="ts">
import { renderless } from '@opentiny/vue-renderless/tab-item-mf/vue'
import { setup, defineComponent, $props, h } from '@opentiny/vue-common'
import type { ITabItemApi } from '@opentiny/vue-renderless/types/tab-item.type'

export default defineComponent({
  props: {
    ...$props,
    title: String,
    name: String,
    selected: Boolean,
    renderTitle: Function,
    renderSetting: Function,
    lazy: Boolean
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api: null }) as unknown as ITabItemApi
  },
  render() {
    return h('div', { attrs: { 'data-tag': `tab-item-${this.name}` } })
  }
})
</script>
