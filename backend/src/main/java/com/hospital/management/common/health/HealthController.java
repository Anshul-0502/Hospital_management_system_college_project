package com.hospital.management.common.health;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Health check endpoint for the Hospital Management System backend.
 * Conforms strictly to Phase 5 requirements: describes application process availability only.
 * Explicitly states that database and clinical services are not yet connected.
 */
@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> getHealth() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("status", "UP");
        response.put("service", "Hospital Management System Backend");
        response.put("phase", "Phase 5 — Backend Foundation");
        response.put("environment", "Development");
        response.put("timestamp", Instant.now().toString());
        response.put("databaseStatus", "Not Connected (Decision pending for Phase 6)");
        response.put("clinicalServices", "Not Active (Phase 5 foundation only)");
        response.put("disclaimer", "Process availability only. Database and operational clinical workflows are planned for later phases.");

        return ResponseEntity.ok(response);
    }
}
