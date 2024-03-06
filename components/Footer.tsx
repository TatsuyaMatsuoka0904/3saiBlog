import { Link } from "@react-email/components";

// フッター　電話番号と店の住所はやめておく
const Footer = () => (
  <footer >


    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <div className="footer__explanation">
      <p className="">ご相談等はこちらまで</p>
        <Link href="https://www.google.co.jp/maps/place/%E5%B9%B3%E9%87%8E%E9%A7%85/@34.6301444,135.5529459,16.61z/data=!4m15!1m8!3m7!1s0x6000ddc31c4d91b7:0xc45d685966bd9e97!2z44CSNTQ1LTAwMjEg5aSn6Ziq5bqc5aSn6Ziq5biC6Zi_5YCN6YeO5Yy66Ziq5Y2X55S677yR5LiB55uu77yU77yU4oiS77yR77yX!3b1!8m2!3d34.6343908!4d135.514193!16s%2Fg%2F11clq73nq1!3m5!1s0x6000def0dd2d03ef:0x9b4e40af75c4288a!8m2!3d34.6308333!4d135.5516791!16s%2Fm%2F03c8hhb?hl=ja&entry=ttu" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
          〒545-0021
        </Link>
        <Link href="https://mail.google.com" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
          test@gmail.com
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;