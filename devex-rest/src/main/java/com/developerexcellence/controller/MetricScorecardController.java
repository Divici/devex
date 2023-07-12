package com.developerexcellence.controller;

import com.developerexcellence.dto.MetricScorecardDTO;
import com.developerexcellence.service.MetricScorecardService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MetricScorecardController {

    private final MetricScorecardService metricScorecardService;

    /**
     * Outputs a list of data transfer objects for each performance dimension
     * @param devId
     * @param date
     * @return          List of MetricScorecardDTO grouping performance dimension scorecards and overview of metric scores
     */
    @SneakyThrows
    @GetMapping("metric-scorecard")
    public ResponseEntity<List<MetricScorecardDTO>> metricScorecardRequest(@RequestParam("devId") String devId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd") Date date) {
        List<MetricScorecardDTO> metricScorecardDTOList = metricScorecardService.compileMetricScorecard(devId, date);
        return new ResponseEntity<>(metricScorecardDTOList, HttpStatus.OK);
    }
}
