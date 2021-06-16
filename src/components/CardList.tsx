import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose } = useDisclosure();
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={2} spacing={10}>
        {cards?.map(card => (
          <Card data={card} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      {/* <ModalViewImage
        imgUrl="https://exame.com/wp-content/uploads/2020/05/supermercado_pandemia.jpg?quality=70&strip=info"
        isOpen={isOpen}
        onClose={onClose}
      /> */}
    </>
  );
}
