<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Icon } from '@iconify/vue';

import { groceryItem } from '../types';

export default defineComponent({
	components: {
		Icon,
	},
    props: {
        isOpen: {
            type: Boolean,
            default: true
        },
        selectedItemId: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        children: {
            type: Array as PropType<Array<groceryItem>>,
            default: []
        },
        nestingLevel: {
            type: Number,
            default: 1
        },
    },
    computed: {
        childElements (): groceryItem[] {
            return this.children;
        }
    },
    methods: {
        select(payload: Object) {
            let toEmit;
            if (payload.hasOwnProperty('item')) {
                // pass it up the stack
                toEmit = payload;
            } else {
                // build a new payload 
                toEmit = { item: payload }
            }
            this.$emit('select', toEmit);
        }
    },
    mounted() {
        console.log(this.children)
    }
});

</script>

<template>
    <ul>
        <li
            :v-for="element in childElements"
            :key="element.id"
        >
            <p
                :class="{'selected': selectedItemId === id }"
                @click="select(element)"
            >
            <Icon 
                v-if="children.length"
                :icon="`fluent:triangle-${ isOpen ? 'down': 'right' }-12-filled`"
                @click="element.open != element.open"
            />
            </p>
            <nested-list-item
                :name="element.name"
                :id="element.id"
                :is-open="element.open"
                :children="element.open ? element.children : []"
                :selected-item-id="selectedItemId"
                @select="(v: Object) => select(v)"
            />
        </li>
    </ul>
</template>

<style>

</style>