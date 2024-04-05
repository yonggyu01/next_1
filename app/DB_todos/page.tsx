import {DBTodolist} from '../components/DBtodolist'
import { Suspense } from 'react'
export default function DBTodos() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
    <DBTodolist/>
    </Suspense>
    );
}
