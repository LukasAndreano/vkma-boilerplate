import { useRouterModal, useRouterPanel } from "@kokateam/router-vkminiapps";
import { Button, Title } from "@vkontakte/vkui";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { getCoffeeList } from "../../api/routes/route.coffee.js";

const Home = () => {
	const [, toModal] = useRouterModal();
	const [, toPanel] = useRouterPanel();

	const fetchCoffee = async () => {
		const { data } = await getCoffeeList();

		console.log(`API Coffee List Example: `, data);
	};

	useEffect(() => {
		fetchCoffee();
	}, []);

	return (
		<>
			<Title weight={"3"} className={"mb10 centered"}>
				Привет, это boilerplate!
			</Title>
			<Button stretched onClick={() => toModal("helloModal")} size={"l"}>
				Открыть модалку!
			</Button>
			<Button
				stretched
				onClick={() => toast.success("Да, это тост")}
				size={"l"}
				className={"mt5"}
			>
				Toast!
			</Button>
			<Button
				className={"mt5"}
				stretched
				onClick={() => toPanel("home2")}
				size={"l"}
			>
				Открыть панель!
			</Button>
		</>
	);
};

export default Home;
