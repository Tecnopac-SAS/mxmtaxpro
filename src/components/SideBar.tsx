import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <aside className="flex flex-col items-center w-64 p-4 bg-[#FAF7F7] h-screen min-w-64">
      <div className="mb-8">
        <img
          src="logo.svg"
          alt="logo"
        />
      </div>
      <div className="w-full mb-8">
        <Accordion
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Año Fiscal</AccordionTrigger>
            <AccordionContent>
              <NavLink to="2019">2019</NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink to="2020">2020</NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink to="2021">2021</NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink to="2022">2022</NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink to="2023">2023</NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink to="2024">2024</NavLink>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full mb-8">
        <NavLink
          className="flex items-center"
          to="account"
        >
          <img
            src="/icons/account.svg"
            className="w-5 h-5 mr-2 text-gray-400"
          />
          <h2 className="text-lg text-gray-400">Cuenta</h2>
        </NavLink>
      </div>
      <div className="mt-auto">
        <NavLink
          to="/"
          className="flex items-center justify-center space-x-2"
        >
          <h2 className="text-lg font-bold text-red-600">Salir</h2>
          <img
            src="/icons/logout.svg"
            className="w-5 h-5 text-red-600"
          />
        </NavLink>
      </div>
    </aside>
  );
}
