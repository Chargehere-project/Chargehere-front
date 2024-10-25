import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import Menu from './menu';
import Footer from '../ChargeMain/Footer'
import { ArrowUpOutlined } from '@ant-design/icons';

interface Product {
  ProductID: number;
  ProductName: string;
  Price: number;
  Discount: number;
  Image: string;
}

const product: React.FC = () => {


  return (
    <div>
      <Header />
      <Menu />

      {/* 페이지 상단으로 이동하는 화살표 버튼 */}
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpOutlined style={{ fontSize: '20px' }} />
      </button>

      <Footer  />
    </div>

    
  );
};

export default product;