import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://yt3.googleusercontent.com/oYmh_vAg_RMbv3BQWPhobyD8S0UOwP5W0ZUJl30Hh911AKRDKe5JTxJC8FS1fuUvmRgObuyaaA=s88-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
