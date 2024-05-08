'use client'
import { Button } from "@nextui-org/button";
import { useQuery } from "@tanstack/react-query";
import { getList } from "./API/Queries/Demo";

export default function Home() {
  const { data: list, isLoading: isFetchhingList } = useQuery({
    queryKey: ['demo'],
    queryFn: getList,
    enabled: false,
  })
  
  return (
    <>
    <p>Hlooo how are you mia?</p>
    <Button variant="flat" color="secondary">Click</Button>
    </>
  );
}
