export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-serif">GAMILA</h2>
            <p className="text-gray-400 mt-1">Developer & Designer</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} GAMILA. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1">Crafting digital experiences with passion</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

