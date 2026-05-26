"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface DateRangePickerProps {
  label: string;
  required?: boolean;
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DateRangePicker({
  label,
  required,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [error, setError] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const isFloating = isFocused || !!startDate || !!endDate;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setError("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function getDaysInMonth(date: Date): (Date | null)[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDay.getDay(); i++) days.push(null);
    for (let i = 1; i <= lastDay.getDate(); i++) days.push(new Date(year, month, i));
    return days;
  }

  const getNextMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 1);

  function handleDateClick(date: Date | null) {
    if (!date) return;
    setError("");

    if (!isMultiDay) {
      onStartDateChange(date);
      onEndDateChange(null);
    } else {
      if (!startDate) {
        onStartDateChange(date);
        onEndDateChange(null);
      } else if (!endDate) {
        if (date < startDate) {
          setError("You can't select a date before the start date");
        } else if (date.toDateString() === startDate.toDateString()) {
          return;
        } else {
          onEndDateChange(date);
        }
      } else {
        onStartDateChange(date);
        onEndDateChange(null);
      }
    }
  }

  const isDateSelected = (date: Date | null) => {
    if (!date) return false;
    if (startDate && date.toDateString() === startDate.toDateString()) return true;
    if (endDate && date.toDateString() === endDate.toDateString()) return true;
    return false;
  };

  const isDateInRange = (date: Date | null) => {
    if (!date || !startDate || !endDate) return false;
    return date > startDate && date < endDate;
  };

  function formatDisplayDate() {
    if (!startDate) return "";
    const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
    if (endDate && isMultiDay) {
      return `${startDate.toLocaleDateString("en-US", options)}  →  ${endDate.toLocaleDateString("en-US", options)}`;
    }
    return startDate.toLocaleDateString("en-US", options);
  }

  function handleToggleMultiDay() {
    const newValue = !isMultiDay;
    setIsMultiDay(newValue);
    setError("");
    if (!newValue) onEndDateChange(null);
  }

  function renderMonth(monthDate: Date) {
    const days = getDaysInMonth(monthDate);
    return (
      <div className="flex-1">
        <div className="text-center font-body font-semibold text-primary text-base mb-6">
          {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
        </div>
        <div className="grid grid-cols-7 gap-x-2 gap-y-2 mb-4">
          {dayNames.map((day) => (
            <div key={day} className="text-center font-sans font-medium text-primary text-sm">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-x-2 gap-y-2">
          {days.map((date, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleDateClick(date)}
              disabled={!date}
              className={`w-10 h-10 flex items-center justify-center font-sans font-medium text-sm rounded-full transition-colors ${
                !date ? "invisible" : ""
              } ${
                isDateSelected(date)
                  ? "bg-primary text-background"
                  : isDateInRange(date)
                  ? "bg-primary/10 text-primary"
                  : "text-primary hover:bg-primary/5"
              }`}
            >
              {date?.getDate()}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setIsFocused(true);
        }}
        className="w-full h-[60px] px-4 border border-[#778472] bg-transparent font-sans font-normal text-[18px] text-primary cursor-pointer flex items-center justify-between"
      >
        <span>{formatDisplayDate()}</span>
        <Image src="/icons/calendar.svg" alt="" width={20} height={20} className="opacity-70" />
      </div>

      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 font-sans font-light ${
          isFloating
            ? "top-0 -translate-y-1/2 text-[12px] bg-background px-1 text-[#778472]"
            : "top-1/2 -translate-y-1/2 text-[18px] text-[#778472]"
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-background border border-primary/20 rounded-2xl shadow-xl z-50 p-6 lg:p-8 w-[95vw] lg:w-[720px] max-w-[720px]">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
            <span className="font-sans font-normal text-[15px] text-primary">Start Date</span>
            <span className="text-primary">⟶</span>
            <span className="font-sans font-normal text-[15px] text-primary">End Date</span>
          </div>

          <div className="flex items-start">
            <button
              type="button"
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
              className="p-2 hover:bg-primary/5 rounded-full text-primary mr-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-6 lg:gap-12 flex-1 overflow-hidden">
              {renderMonth(currentMonth)}
              <div className="hidden lg:block flex-1">{renderMonth(getNextMonth(currentMonth))}</div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
              className="p-2 hover:bg-primary/5 rounded-full text-primary ml-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mt-6 pt-4 border-t border-primary/10">
            <div className="flex items-center gap-3">
              <span className="font-sans font-normal text-sm text-primary">Multi-day Event</span>
              <button
                type="button"
                onClick={handleToggleMultiDay}
                className={`w-14 h-7 rounded-full transition-colors relative ${isMultiDay ? "bg-primary" : "bg-gray-300"}`}
              >
                <span
                  className={`absolute top-1 w-5 h-5 bg-background rounded-full shadow-sm transition-all ${
                    isMultiDay ? "left-8" : "left-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              {error && <span className="font-sans text-sm text-red-500">{error}</span>}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setError("");
                }}
                className="bg-primary text-background font-sans text-sm px-8 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}