"use client";

import { resultSchema } from "@/schema/result.schema";
import useStore, { Result } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { isEqual } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const UpdateCourse = () => {
  const {
    userData: { percentage, rank, score },
    updateResult,
    updateChartData,
  } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const prevValues = useRef<Result>({ percentage, rank, score });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<Result>({
    resolver: zodResolver(resultSchema),
    defaultValues: {
      percentage,
      rank,
      score,
    },
  });

  useEffect(() => {
    setValue("rank", rank);
    setValue("percentage", percentage);
    setValue("score", score);
  }, [rank, percentage, score, setValue]);

  const onSubmit = (data: Result) => {
    console.log(data, "Submitted Data");

    if (isEqual(prevValues.current, data)) {
      setIsOpen(false);
      console.log("No changes detected");
      return;
    }

    updateResult(data);
    updateChartData(data.percentage, percentage);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[340px] rounded-md">
        <DialogHeader>
          <DialogTitle className="flex justify-between px-4">
            <div>Update Scores</div>
          </DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Rank Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rank" className="text-right font-bold">
              Rank
            </Label>
            <Input
              id="rank"
              {...register("rank", { valueAsNumber: true })}
              className="col-span-3"
            />
            {errors.rank && (
              <p className="text-red-500 text-nowrap ml-auto">
                {errors.rank.message}
              </p>
            )}
          </div>

          {/* Percentage Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="percentage" className="text-right font-bold">
              Percentage
            </Label>
            <Input
              id="percentage"
              {...register("percentage", { valueAsNumber: true })}
              className="col-span-3"
            />
            {errors.percentage && (
              <p className="text-red-500 text-nowrap ml-auto">
                {errors.percentage.message}
              </p>
            )}
          </div>

          {/* Score Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="score" className="text-right font-bold">
              Score (out of 15)
            </Label>
            <Input
              id="score"
              {...register("score", { valueAsNumber: true })}
              className="col-span-3"
            />
            {errors.score && (
              <p className="text-red-500 text-nowrap ml-auto">
                {errors.score.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <DialogFooter className="flex gap-2">
            <DialogClose asChild>
              <Button type="button" onClick={() => reset()}>
                Close
              </Button>
            </DialogClose>
            <Button type="submit" variant="secondary">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCourse;
