import type { Word } from '@/typings'

export async function wordListFetcher(url: string): Promise<Word[]> {
  const URL_PREFIX: string = '' // 对于 username.github.io 类型的仓库，使用根路径

  const response = await fetch(URL_PREFIX + url)
  const words: Word[] = await response.json()
  return words
}
