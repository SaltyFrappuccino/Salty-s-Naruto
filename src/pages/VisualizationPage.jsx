import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../components/Button';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const PageHeader = styled.div`
  margin-bottom: var(--spacing-xl);
  text-align: center;
`;

const Title = styled.h1`
  font-size: var(--font-size-xxl);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
`;

const VisualizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
`;

const VisualizationImage = styled.img`
  max-width: 100%;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow);
`;

const VisualizationPage = () => {
  const navigate = useNavigate();
  const [visualizations, setVisualizations] = useState([]);

  useEffect(() => {
    // Retrieve analysis result from localStorage
    const storedResult = localStorage.getItem('analysisResult');
    
    if (storedResult) {
      try {
        const result = JSON.parse(storedResult);
        setVisualizations(Object.values(result.visualizations || {}));
      } catch (err) {
        console.error('Error parsing analysis result:', err);
      }
    }
  }, []);

  const handleBack = () => {
    navigate('/results');
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>Визуализации</Title>
        <Button variant="outlined" onClick={handleBack}>
          <FiArrowLeft /> Назад к результатам
        </Button>
      </PageHeader>
      
      <VisualizationContainer>
        {visualizations.length > 0 ? (
          visualizations.map((viz, index) => (
            <VisualizationImage key={index} src={viz.img_path} alt={`Visualization ${index + 1}`} />
          ))
        ) : (
          <p>Нет доступных визуализаций.</p>
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default VisualizationPage;
