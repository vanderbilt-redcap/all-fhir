<template>
    <table>
        <thead>
            <tr>
                <th>MRN</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>nothing here</td>
            </tr>
            <template v-for="(item, index) in items" :key="index">
                <tr>
                    <MonitorTableRow :item="item"/>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import MonitorTableRow from './MonitorTableRow.vue';
interface FetchEntry {
    id?: number
    mrn: string
} 

const props = defineProps<{
  items: FetchEntry[]
}>()

</script>

<style scoped>

</style>