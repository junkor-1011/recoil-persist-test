import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { hogeState } from '@/globalstates/hoge-string';

const Page: React.FC = () => {
  const [hoge, setHoge] = useRecoilState(hogeState)
  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setHoge(event.target.value || '')
  }, [setHoge])
  return (
    <main>
      <div>hogehoge</div>
      <input type='text' onChange={handleOnChange} />
      <output>value: {hoge}</output>
    </main>
  )
}
export default Page;
