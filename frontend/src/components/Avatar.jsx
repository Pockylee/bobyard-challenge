const Avatar = ({ author, size = 40 }) => {
  return (
    <div
      className="flex items-center justify-center text-white font-bold rounded-full bg-blue-600"
      style={{
        width: size,
        height: size,
        fontSize: `${size * 0.4}px`,
      }}
    >
      {author.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
