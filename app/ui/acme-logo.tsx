import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { GF_Lusitana_Font } from './fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${GF_Lusitana_Font.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
