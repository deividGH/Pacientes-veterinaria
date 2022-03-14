const Error = ({children}) => {
  return (
    <div className="text-center font-bold uppercase bg-red-800 text-white mb-3 rounded-md p-3">
      <p>{children}</p>
    </div>
  );
};

export default Error;
