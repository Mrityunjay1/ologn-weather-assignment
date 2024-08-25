import Search from "../components/Search";

type Props = {};
const HomePage = (props: Props) => {
  return (
    <div className="flex flex-col items-center min-h-screen lg:mx-20 mx-8 justify-center">
      <div className="flex items-center justify-center h-full mb-6">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-red-500">W</span>
          <span className="text-4xl font-bold text-yellow-500">e</span>
          <span className="text-4xl font-bold text-blue-500">a</span>
          <span className="text-4xl font-bold text-green-500">t</span>
          <span className="text-4xl font-bold text-red-500">h</span>
          <span className="text-4xl font-bold text-yellow-500">e</span>
          <span className="text-4xl font-bold text-blue-500">r</span>
        </div>
      </div>
      <Search />
    </div>
  );
};
export default HomePage;
