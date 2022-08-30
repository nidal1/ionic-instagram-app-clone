const Bullet = ({ isActive = false }: { isActive?: boolean }) => {
  return (
    <div
      className={`w-[8px] h-[8px] rounded-full ${
        isActive ? "bg-[#32B5FF]" : "bg-[#C4C4C4]"
      }`}
    ></div>
  );
};
export default Bullet;
