package com.factory.workstation;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api")
public class WorkStationController {
    @RequestMapping(method = RequestMethod.GET, path = "/random-data")
    public List<DataEntry> randomData() {
        final var result = new ArrayList<DataEntry>();
        for (int i = 0; i < 42; i++) {
            result.add(new DataEntry(UUID.randomUUID().toString()));
        }
        return result;
    }
}
