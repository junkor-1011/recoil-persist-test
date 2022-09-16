import React from 'react'
import { useRecoilValue } from 'recoil'
import { hogeState } from '@/globalstates/hoge-string';

const Page: React.FC = () => {
  const hoge = useRecoilValue(hogeState)
  return (
    <main>
      <div>hogehoge</div>
      <output>value: {hoge}</output>
    </main>
  )
}
export default Page;
