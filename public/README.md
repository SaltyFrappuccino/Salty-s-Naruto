# Документация AI-Mammoth


[![LangChain](https://img.shields.io/badge/LangChain-0.1.0%2B-34D058.svg)](https://langchain.com/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-2.7%2B-6DB33F.svg)](https://spring.io/projects/spring-boot)
[![Docker](https://img.shields.io/badge/Docker-Supported-2496ED.svg)](https://www.docker.com/)
[![ChromaDB](https://img.shields.io/badge/Vector_DB-ChromaDB-blueviolet.svg)](https://www.trychroma.com/)
![Code Size](https://img.shields.io/badge/Code%20Size-50K%2B%20lines-informational)
[![Documentation](https://img.shields.io/badge/Documentation-Comprehensive-blue.svg)](https://github.com/)
[![Activity](https://img.shields.io/badge/Activity-High-brightgreen.svg)](https://github.com/)
[![JIRA Integration](https://img.shields.io/badge/Integration-JIRA-0052CC.svg)](https://www.atlassian.com/software/jira)
[![Bitbucket Integration](https://img.shields.io/badge/Integration-Bitbucket-0052CC.svg)](https://bitbucket.org/)
[![Confluence Integration](https://img.shields.io/badge/Integration-Confluence-0052CC.svg)](https://www.atlassian.com/software/confluence)
[![Zephyr Integration](https://img.shields.io/badge/Integration-Zephyr-00B5D1.svg)](https://smartbear.com/test-management/zephyr/)

## Ключевые особенности 🚀

### Многоуровневый анализ артефактов
- **11 AI-агентов** для анализа требований, кода, тестов и документации
- Автоматическое выявление несоответствий между:
  - Требованиями и реализацией
  - Кодом и тест-кейсами
  - Документацией и фактической функциональностью
- Дифференциальный анализ изменений между версиями артефактов

### Интеграции с экосистемой разработки
- Бесшовная работа с Jira, Bitbucket, Confluence и Zephyr
- Автоматический сбор данных из:
  - Задач Jira (Story, Epic)
  - Исходного кода из Bitbucket
  - Тест-кейсов из Zephyr
  - Документации из Confluence

### Продвинутые возможности
- Генерация интеллектуальных рекомендаций по улучшению
- Анализ уязвимостей безопасности (OWASP Top 10)
- Предсказание количества багов с последующей верификацией
- Автоматическая генерация отчетов в 5 форматах (HTML, Markdown, PDF, DOCX, Confluence)

## Технологический стек 🔧

### Основные компоненты
- **Ядро анализа**: Python 3.9+, FastAPI, LangChain
- **AI-модели**: GigaChat (Sber AI)
- **Векторная БД**: ChromaDB для RAG-поиска
- **Интеграции**: Spring Boot, Apache Kafka
- **Визуализация**: Plotly, React

## Решаемые проблемы 💡

### Для команд разработки
- Снижение времени на ручную сверку артефактов
- Раннее обнаружение несоответствий
- Автоматизация анализа требований

### Для бизнеса
- Сокращение Lead Time 
- Увеличение частоты релизов
- Снижение стоимости исправления дефектов

## Уникальные преимущества 🏆

1. **Глубокая интеграция** с инструментами экосистемы Сбера
2. **Многоагентная архитектура** с разделением ответственности:
   - Requirements Agent
   - Code Compliance Evaluator
   - Security Analyzer
   - Documentation Validator
   - и другие...
3. **Адаптивный контекстный анализ** с учетом доменной специфики
4. **Гибкая система рекомендаций** с приоритизацией задач

## Планы развития 🚧

### Ближайшие цели
- Интеграция с Сберворкс для бесшовного workflow
- Улучшение обработки blacklist GigaChat
- Расширение семантической базы знаний
- Реализация автоматических PR-чекеров для Bitbucket
- Анализ артефактов с временной привязкой
- Предиктивная аналитика качества кода

## Быстрый старт ⚡
1. Установите зависимости: `npm install`
2. Запустите приложение: `npm start` 