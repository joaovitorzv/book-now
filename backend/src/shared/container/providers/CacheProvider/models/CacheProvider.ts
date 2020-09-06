import ICacheProviderDTO from '../dtos/ICacheProviderDTO';

export default interface ICacheProvider {
  save(data: ICacheProviderDTO): Promise<void>;
  recover<T>(key: string): Promise<T | null>;
  invalidade(key: string): Promise<void>;
  invalidadePrefix(prefix: string): Promise<void>
}