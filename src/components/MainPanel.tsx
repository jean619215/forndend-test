
import * as React from 'react'
import { useState, useEffect } from 'react';
import { requestReelEstatesData } from 'src/apis/realEstate';
import styled from 'styled-components';

import InputPage from './page/InputPage';
import ResultPage from './page/ResultPage';
import TablePage from './page/TablePage';



const StyleManPanel = styled.div`
  backgroud-color: black;
`;

const StyleTabBar = styled.div`
  
`;

const StyleTabButton = styled.button`
  
`;

export interface IRealEstateData{
  id: number,
  city:string,
  state: string,
  type: string,
  price: number
}

export const TYPES:Array<string> = [
  'Apartment',
  'Single-family',
  'Townhomes',
  'Condo'
]

enum PageType {
  ResultPage='resultPage',
  TablePage='tablePage',
  InputPage='inputPage'
}

export default function MainPanel() {
  const [loading, setLoading] = useState<boolean>(false);
  const [pageType, setPageType] = useState<PageType>(PageType.ResultPage);
  const [realEstateData, setData] = useState<Array<IRealEstateData>>([]);

  useEffect(() => {
    setLoading(true);
    getReelEstatesData();
  }, [])

  async function getReelEstatesData() {
    const res = await requestReelEstatesData();
    console.log(res);
  }

  return (
    <StyleManPanel>
      <StyleTabBar>

        <StyleTabButton onClick={()=>setPageType(PageType.ResultPage)}>
          Result
        </StyleTabButton>

        <StyleTabButton onClick={()=>setPageType(PageType.TablePage)}>
          All Table
        </StyleTabButton>

        <StyleTabButton onClick={()=>setPageType(PageType.InputPage)}>
          Input
        </StyleTabButton>

      </StyleTabBar>


      {pageType===PageType.ResultPage? (
        <ResultPage />
      ): ( pageType ===PageType.TablePage) ? (
        <TablePage/>
      ): (pageType ===PageType.InputPage) ? (
        <InputPage/>
      ): null
    
    }
       

    </StyleManPanel>
  );
}